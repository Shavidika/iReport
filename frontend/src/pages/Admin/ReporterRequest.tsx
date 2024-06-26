import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
// import { AppDispatch } from '../../store';
import {
  getReporterRequests,
  acceptReporterRequest,
  rejectReporterRequest,
  UserInfo,
} from '../../slices/userSlice';
import userEvent from '@testing-library/user-event';

const ReporterRequest = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { reporterRequests, status, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    dispatch(getReporterRequests());
  }, [dispatch,userEvent]);

  const handleAccept = (id: string) => {
    dispatch(acceptReporterRequest(id));
  };

  const handleReject = (id: string) => {
    dispatch(rejectReporterRequest(id));
  };

  const handleDownload = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reporter Request</h1>
      <p>
        Welcome to the Reporter Request page. Here you can manage reporter requests and view their details.
      </p>
      <table className="min-w-full bg-white border border-gray-200 mt-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Email</th>
            <th className="py-2 px-4 border-b text-left">PDF URL</th>
            <th className="py-2 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reporterRequests.map((request: UserInfo) => (
            <tr key={request.id}>
              <td className="py-2 px-4 border-b align-middle">{request.email}</td>
              <td className="py-2 px-4 border-b align-middle">
                <a
                  href={request.cv_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View PDF
                </a>
              </td>
              <td className="py-2 px-4 border-b text-center align-middle">
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => handleAccept(request.id)}
                    className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleDownload(request.cv_link)}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
                  >
                    Download PDF
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReporterRequest;
