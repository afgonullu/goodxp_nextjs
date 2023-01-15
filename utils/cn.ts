import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

const cn = (...args: classnames.ArgumentArray) => twMerge(classnames(args));

export default cn;
