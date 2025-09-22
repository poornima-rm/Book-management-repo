import React from 'react';

const BookSkeleton = () => (
  <tr className="animate-pulse">
    <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-3/4"></div></td>
    <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-1/2"></div></td>
    <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-1/3"></div></td>
    <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-16"></div></td>
    <td className="px-6 py-4"><div className="h-6 bg-gray-200 rounded-full w-20"></div></td>
    <td className="px-6 py-4"><div className="h-8 bg-gray-200 rounded w-20"></div></td>
  </tr>
);

export default BookSkeleton;
