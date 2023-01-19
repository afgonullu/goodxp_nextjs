import type { Meta, StoryObj } from '@storybook/react';

import type { IXTemplateProps } from './XTemplate';
import XTemplate from './XTemplate';

const props: IXTemplateProps = {
  name: 'XTemplate',
};

const meta: Meta<typeof XTemplate> = {
  component: XTemplate,
};

export default meta;

type Story = StoryObj<typeof XTemplate>;

export const Primary: Story = {
  args: {
    name: props.name,
  },
};
