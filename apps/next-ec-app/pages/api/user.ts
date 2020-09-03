import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ id: 1, name: 'John' });
};
