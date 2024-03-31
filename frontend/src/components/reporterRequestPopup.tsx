import React, { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { getUser } from "../slices/authSlice";
import { Roles } from "../constants";

const RequestReporter: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cv, setCv] = useState<File | null>(null);
  const [email, setEmail] = useState("");

  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);

  useEffect(() => {
    if (basicUserInfo) {
      dispatch(getUser(basicUserInfo.id));
    }
  }, [basicUserInfo]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toggleModal();
  };

  const checkRole = () => {
    setEmail(basicUserInfo?.email||" ");
    if (basicUserInfo?.roles?.includes(Roles.Reporter)) {
      navigate("/reporting");
    } else {
      toggleModal();
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        className=" text-red-500 text- font-semibold leading-6"
        onClick={checkRole}
      >
        Switch to Reporting
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="relative bg-white rounded-lg max-w-md w-full mx-auto p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  It seems that you are not a reporter yet. Request to be a
                  reporter
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 hover:text-gray-700"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border  w-full border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    placeholder="name@abcmail.com"
                    value={email}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="cv"
                    className="block mb-2 text-sm font-medium"
                  >
                    Upload CV (PDF only)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    name="cv"
                    id="cv"
                    className="w-full border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    required
                    onChange={(e) => {}}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Request to be a reporter
                </button>

                {/* <div className="text-sm text-gray-500">
                  Not registered?{" "}
                  <a href="#" className="text-blue-700 hover:underline">
                    Create account
                  </a>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestReporter;
