import React from 'react';

const reporterRequests = [
  {
    email: 'sathsarasoysa2089@gmail.com',
    pdfUrl: 'https://example.com/report1.pdf',
  },
  {
    email: 'shavidhika.ekanayake@gmail.com',
    pdfUrl: 'https://example.com/report2.pdf',
  },
  {
    email: 'themaldesilva@gmail.com',
    pdfUrl: 'https://example.com/report3.pdf',
  },
  {
    email: 'hirunafernando@gmail.com',
    pdfUrl: 'https://example.com/report4.pdf',
  },
  {
    email: 'sathsaranavoda@gmail.com',
    pdfUrl: 'https://example.com/report5.pdf',
  },
];

const ReporterRequest = () => {
  const handleAccept = (email: string) => {
    // Handle accept action
    console.log(`Accepted: ${email}`);
  };

  const handleReject = (email: string) => {
    // Handle reject action
    console.log(`Rejected: ${email}`);
  };

  const handleDownload = (pdfUrl: string) => {
    // Handle download action
    window.open(pdfUrl, '_blank');
  };

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
          {reporterRequests.map((request, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b align-middle">{request.email}</td>
              <td className="py-2 px-4 border-b align-middle">
                <a
                  href={request.pdfUrl}
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
                    onClick={() => handleAccept(request.email)}
                    className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(request.email)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleDownload(request.pdfUrl)}
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
