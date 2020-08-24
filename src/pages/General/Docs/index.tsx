import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  CardImage,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  CardContent,
  CardFooter,
  CardFooterItem,
} from 'components/bulma/components/Card';
import { Form, Control } from 'components/bulma/form';
import Box from 'components/bulma/elements/Box';
import Title from 'components/bulma/elements/Title';
import Subtitle from 'components/bulma/elements/Subtitle';
import { Tag, Tags } from 'components/bulma/elements/Tags';
import Block from 'components/bulma/elements/Block';
import Field from 'components/bulma/elements/Field';
import Label from 'components/bulma/elements/Label';
import Table from 'components/bulma/elements/Table';
import { Tabs, Tab } from 'components/bulma/components/Tabs';
import IconContainer from 'components/bulma/elements/IconWrapper';
import { Column } from 'components/bulma/columns';

const Docs: React.FC = () => (
  <div>
    <Box>
      <Title>Box</Title>
      <Subtitle>A box to contain other elements</Subtitle>
    </Box>
    <Box>
      <Title>Title</Title>
      <Title as="h3" styledAs="h1">
        Title styled as h1
      </Title>
      <Title as="h3" styledAs="h2">
        Title styled as h2
      </Title>
      <Title as="h3" styledAs="h3">
        Title styled as h3
      </Title>
      <Title as="h3" styledAs="h4">
        Title styled as h4
      </Title>
      <Title as="h3" styledAs="h5">
        Title styled as h5
      </Title>
      <Title as="h3" styledAs="h6">
        Title styled as h6
      </Title>
    </Box>
    <Box>
      <Title>Subtitle</Title>
      <Subtitle>Subtitle under title</Subtitle>
      <Subtitle as="div">Subtitle as div</Subtitle>
    </Box>
    <Box>
      <Title>Tag</Title>
      <Subtitle>Small tag labels to insert anywhere</Subtitle>
      <Block>
        <Title as="h3" styledAs="h5">
          Grouped Tags
        </Title>
        <Tags>
          <Tag>Tag one</Tag>
          <Tag color="primary">Player</Tag>
          <Tag color="danger">Admin</Tag>
        </Tags>
      </Block>
      <Block>
        <Title as="h3" styledAs="h5">
          Grouped Tags with same size
        </Title>
        <Tags size="medium">
          <Tag>Tag one</Tag>
          <Tag color="primary">Tag two</Tag>
          <Tag color="danger">Tag three</Tag>
        </Tags>
      </Block>
      <Block>
        <Title as="h3" styledAs="h5">
          Colors
        </Title>
        <Tags>
          <Tag>Tag</Tag>
          <Tag color="black">Black</Tag>
          <Tag color="dark">Dark</Tag>
          <Tag color="light">Light</Tag>
          <Tag color="white">White</Tag>
          <Tag color="primary">Primary</Tag>
          <Tag color="link">Link</Tag>
          <Tag color="info">Info</Tag>
          <Tag color="success">Success</Tag>
          <Tag color="warning">Warning</Tag>
          <Tag color="danger">Danger</Tag>
        </Tags>
      </Block>
      <Block>
        <Title as="h3" styledAs="h5">
          Light Colors
        </Title>
        <Tags>
          <Tag light>Tag</Tag>
          <Tag color="primary" light>
            Primary
          </Tag>
          <Tag color="link" light>
            Link
          </Tag>
          <Tag color="info" light>
            Info
          </Tag>
          <Tag color="success" light>
            Success
          </Tag>
          <Tag color="warning" light>
            Warning
          </Tag>
          <Tag color="danger" light>
            Danger
          </Tag>
        </Tags>
      </Block>
      <Block>
        <Title as="h3" styledAs="h5">
          Sizes
        </Title>
        <Tags>
          <Tag>Normal</Tag>
          <Tag size="medium">Medium</Tag>
          <Tag size="large">Large</Tag>
        </Tags>
      </Block>
      <Block>
        <Title as="h3" styledAs="h5">
          Modifiers
        </Title>
        <Tags>
          <Tag rounded>Rounded</Tag>
          <Tag deleteCross onClick={() => window.alert('Click!')} />
        </Tags>
      </Block>
      <Block>
        <Title as="h3" styledAs="h5">
          Tag with addons
        </Title>
        <Tags hasAddons>
          <Tag color="primary">One</Tag>
          <Tag color="info">Two</Tag>
        </Tags>
      </Block>
      <Block>
        <Title as="h3" styledAs="h5">
          Grouped Tags with addons
        </Title>
        <Field isGrouped>
          <Control>
            <Tags hasAddons>
              <Tag color="primary">One</Tag>
              <Tag color="info">Two</Tag>
            </Tags>
          </Control>
          <Control>
            <Tags hasAddons>
              <Tag color="light">Delete</Tag>
              <Tag
                color="danger"
                deleteCross
                onClick={() => window.alert('Removed!')}
              />
            </Tags>
          </Control>
        </Field>
      </Block>
    </Box>
    <Box>
      <Title>Icon</Title>
      <Subtitle>The Icons that use FontAwesome 5</Subtitle>
      <IconContainer>
        <FontAwesomeIcon icon={faIcons} />
      </IconContainer>
      <IconContainer size="medium">
        <FontAwesomeIcon icon={faIcons} size="lg" />
      </IconContainer>
      <IconContainer size="large" color="success">
        <FontAwesomeIcon icon={faIcons} size="2x" />
      </IconContainer>
    </Box>
    <Box>
      <Title>Card</Title>
      <Subtitle>An all-around flexible and composable component</Subtitle>
      <Column size={4}>
        <Card>
          <CardImage>
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="card placeholder"
            />
          </CardImage>
          <CardHeader>
            <CardHeaderTitle>Card Title</CardHeaderTitle>
            <CardHeaderIcon>Card Icon</CardHeaderIcon>
          </CardHeader>
          <CardContent> Card Content</CardContent>
          <CardFooter>
            <CardFooterItem>Card footer item 1</CardFooterItem>
            <CardFooterItem>
              <span>Card footer item 2</span>
            </CardFooterItem>
          </CardFooter>
        </Card>
      </Column>
    </Box>
    <Tabs>
      <Tab to="/docs/" isActive>
        Pictures
      </Tab>
      <Tab to="/docs/#music">Music</Tab>
      <Tab to="/docs/#videos">Videos</Tab>
      <Tab to="/docs/#documents">Documents</Tab>
    </Tabs>
    <Box withTabs>
      <Title>Tabs</Title>
      <Subtitle>Simple responsive horizontal navigation tabs</Subtitle>
      <Tabs size="large">
        <Tab to="/docs/" isActive>
          Pictures
        </Tab>
        <Tab to="/docs/#music">Music</Tab>
        <Tab to="/docs/#videos">Videos</Tab>
        <Tab to="/docs/#documents">Documents</Tab>
      </Tabs>
    </Box>
    <Box>
      <Title>Table</Title>
      <Subtitle>The inevitable HTML table, with special case cells</Subtitle>
      <Table hoverable striped fullWidth>
        <thead>
          <Table.Row>
            <th align="center">Name</th>
            <th align="center">Title</th>
            <th align="center">Description</th>
            <th align="center">Points</th>
          </Table.Row>
        </thead>
        <tbody>
          <Table.Row selected>
            <th>Luuk Gille</th>
            <td>Read a Book</td>
            <td>Read a book to become more knowledgeable</td>
            <td align="center">1</td>
          </Table.Row>
          <Table.Row>
            <th>Luuk Gille</th>
            <td>Read a Book</td>
            <td>Read a book to become more knowledgeable</td>
            <td align="center">1</td>
          </Table.Row>
          <Table.Row>
            <th>Luuk Gille</th>
            <td>Read a Book</td>
            <td>Read a book to become more knowledgeable</td>
            <td align="center">1</td>
          </Table.Row>
        </tbody>
      </Table>
    </Box>
    <Box>
      <Form className="column is-one-third">
        <Field>
          <Label htmlFor="Name">Name</Label>
          <Control>
            <input
              className="input"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                console.log(e.currentTarget.value);
              }}
            />
          </Control>
        </Field>
        <Field>
          <Label htmlFor="Desciption">Description</Label>
          <Control>
            <textarea
              style={{ resize: 'none' }}
              className="textarea"
              placeholder="Desciption"
            />
          </Control>
        </Field>
        <Field isGrouped>
          <Control>
            <button className="button">Submit</button>
          </Control>
          <Control>
            <button className="button">Cancel</button>
          </Control>
        </Field>
      </Form>
    </Box>
  </div>
);

export default Docs;
