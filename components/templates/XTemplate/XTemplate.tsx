export interface IXTemplate {
  name: string;
}

const XTemplate = ({ name }: IXTemplate) => {
  const greet = 'Hello world!';

  return <div>{`${name}, ${greet}`}</div>;
};

export default XTemplate;
