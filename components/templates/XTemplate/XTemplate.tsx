import { cva, VariantProps } from 'class-variance-authority';

const xTemplateStyles = cva('bg-primary text-gray-50 p-4', {
  variants: {
    intent: {
      primary: 'bg-primary text-gray-50',
      secondary: 'bg-secondary text-gray-50',
    },
    /// ... other variants
  },
});

export interface IXTemplateProps extends VariantProps<typeof xTemplateStyles> {
  name: string;
}

const XTemplate = ({ intent = 'primary', name }: IXTemplateProps) => {
  const greet = 'Hello world!';

  return <div className={xTemplateStyles({ intent })}>{`${name}, ${greet}`}</div>;
};

export default XTemplate;
