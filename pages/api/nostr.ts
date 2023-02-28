import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  names: {
    faruk: string;
  };
};

export default function handler(_req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.json({
    names: {
      faruk: '3938ec2739a29f21ac0b72637477178e780cd1ca5d15887daca596d7c2100fb8',
    },
  });
}
