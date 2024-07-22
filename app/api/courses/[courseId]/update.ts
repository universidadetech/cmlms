import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    const { courseId } = req.query;
    const { price, isFree } = req.body;

    try {
      const updatedCourse = await prisma.course.update({
        where: { id: String(courseId) },
        data: {
          price: isFree ? 0 : price,
          isFree,
        },
      });
      res.status(200).json(updatedCourse);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update course' });
    }
  } else {
    res.setHeader('Allow', ['PATCH']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
