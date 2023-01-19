import { render } from '@testing-library/react';

import XTemplate, { IXTemplateProps } from './XTemplate';

const renderComponent = (props: Partial<IXTemplateProps>) => {
  const defaultProps: IXTemplateProps = {
    name: 'John Doe',
  };
  return render(<XTemplate {...defaultProps} {...props} />);
};

describe('XTemplate', () => {
  it('should render', () => {
    const { container } = renderComponent({});

    expect(container).toBeInTheDocument();
  });
});
