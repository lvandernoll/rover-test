import React, { useState, FormEvent } from 'react';
import { Input, Field, Label, Block, Subtitle } from 'components/bulma/elements';

type CompassDirection = 'N' | 'E' | 'W' | 'S';
type Direction = 'L' | 'M' | 'R';

interface Size {
  x: number,
  y: number,
}

interface RoverStatus {
  x: number,
  y: number,
  rotation: number,
}

interface RoverInstruction {
  initialPosition: RoverStatus,
  instructions: Direction[],
}

const Main: React.FC = () => {
  const [instructions, setInstructions] = useState<string[]>(['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM']);
  const [output, setOutput] = useState<string[]>([]);

  const getSize = (coords: string): Size => ({ x: +coords[0], y: +coords[2]})

  const getRoverInstructions = (ins: string[]): RoverInstruction[] => {
    const roverInstructions: RoverInstruction[] = [];
    for(let i = 0; i < ins.length; i += 2) {
      roverInstructions.push({
        initialPosition: {
          x: +ins[i][0],
          y: +ins[i][2],
          rotation: compassDirectionToDegrees(ins[i][4] as CompassDirection),
        },
        instructions: Array.from(ins[i + 1]) as Direction[],
      });
    }
    return roverInstructions;
  }

  const compassDirectionToDegrees = (compassDirection: CompassDirection): number => {
    switch(compassDirection) {
      case 'N':
        return 0;
      case 'E':
        return 90;
      case 'S':
        return 180;
      case 'W':
        return 270;
    }
  }

  const degreesToCompassDirection = (degrees: number): CompassDirection => {
    switch(degrees) {
      case 0:
        return 'N';
      case 90:
        return 'E';
      case 180:
        return 'S';
      case 270:
        return 'W';
      default:
        return 'N';
    }
  }

  const convertDegrees = (degrees: number): number => degrees < 0 ? degrees += 360 : degrees >= 360 ? degrees -= 360 : degrees;

  const moveRover = (size: Size, status: RoverStatus): RoverStatus => {
    switch(degreesToCompassDirection(status.rotation)) {
      case 'N':
        status.y = Math.min(status.y + 1, size.y);
        break;
      case 'E':
        status.x = Math.min(status.x + 1, size.x);
        break;
      case 'S':
        status.y = Math.max(status.y - 1 , 0);
        break;
      case 'W':
        status.x = Math.max(status.x - 1 , 0);
        break;
    }
    return status;
  }

  const followInstructions = (size: Size, roverInstruction: RoverInstruction): string => {
    const roverStatus: RoverStatus = roverInstruction.initialPosition;
    roverInstruction.instructions.forEach((ins: Direction) => {
      switch(ins) {
        case 'L':
          roverStatus.rotation = convertDegrees(roverStatus.rotation - 90);
          break;
        case 'R':
          roverStatus.rotation = convertDegrees(roverStatus.rotation + 90);
          break;
        case 'M':
          moveRover(size, roverStatus);
          break;
      }
    });
    return `${roverStatus.x} ${roverStatus.y} ${degreesToCompassDirection(roverStatus.rotation)}`;
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const size: Size = getSize(instructions[0]);
    const roverInstructions: RoverInstruction[] = getRoverInstructions(instructions.slice(1));

    const newOutput: string[] = [];
    roverInstructions.forEach((roverInstruction: RoverInstruction) => {
      newOutput.push(followInstructions(size, roverInstruction));
    });
    setOutput(newOutput);
  }

  return (
    <>
      <Block>
        <Subtitle>Input</Subtitle>
        <form onSubmit={onSubmit}>
          <Field>
            <Label htmlFor='instructions'>Instructions</Label>
            <Input
              as='textarea'
              id='instructions'
              defaultValue={instructions.join('\n')}
              onChange={(e) => setInstructions(e.currentTarget.value.split('\n'))}
            />
          </Field>
          <Field>
            <button className='button' type='submit'>Submit</button>
          </Field>
        </form>
      </Block>
      <Block>
        {output && <Subtitle>Output</Subtitle>}
        <div className='is-family-code'>
          {output.map(str => <p>{str}</p>)}
        </div>
      </Block>
    </>
  )
}

export default Main;
