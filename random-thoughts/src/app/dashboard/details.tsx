"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import { CopyIcon, Dot } from "../icons";
import { mockUser } from "../helpers/mockData";
import Image from "next/image";

export function UserDetails() {
  const user = mockUser;

  return (
    <div
      className="bg-white overflow-hidden sm:rounded-lg"
      style={{
        boxShadow: `0px 20px 24px -4px rgba(16, 24, 40, 0.08)`,
      }}
    >
      <div className="flex p-8">
        <h3 className="text-xl leading-6 font-semibold text-gray-900 my-auto">
          User
        </h3>
      </div>
      {user ? (
        <div className="pb-6 max-h-96">
          <dl>
            <div className="px-8 py-2">
              <dt className="text-sm font-semibold">User ID</dt>
              <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2 flex gap-2">
                {user.id}
                <CopyButton text={user.id} />
              </dd>
            </div>
            {user.firstName && (
              <div className="px-8 py-2">
                <dt className="text-sm font-semibold mb-1">First Name</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  {user.firstName}
                </dd>
              </div>
            )}
            {user.lastName && (
              <div className="px-8 py-2">
                <dt className="text-sm font-semibold mb-1">Last Name</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  {user.lastName}
                </dd>
              </div>
            )}
            <div className="px-8 py-2">
              <dt className="text-sm font-semibold mb-1">Email addresses</dt>
              <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                {user.emailAddresses.map((email) => (
                  <div key={email.id} className="flex gap-2 mb-1">
                    {email.emailAddress}
                  </div>
                ))}
              </dd>
            </div>
            {user && (
              <div className="px-8 py-2">
                <dt className="text-sm font-semibold mb-1">Profile Image</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  <Image
                    src="/userCircle.svg"
                    alt="Clerk Logo"
                    width={50}
                    height={32}
                    priority
                  />
                </dd>
                <dt className="text-sm font-semibold mt-1">Trend in Sweden</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  #Dotnet
                </dd>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  #SaltEvent
                </dd>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  #Winter2023
                </dd>
              </div>
            )}
          </dl>
        </div>
      ) : (
        <div className="text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          Loading user data...
        </div>
      )}
    </div>
  );
}

function CopyButton(props: { text: string }) {
  const [tooltipShown, setTooltipShown] = useState(false);

  useEffect(() => {
    if (tooltipShown) {
      const timeout = setTimeout(() => setTooltipShown(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [tooltipShown]);

  return (
    <>
      <button
        onClick={() => {
          if (navigator.clipboard) navigator.clipboard.writeText(props.text);
          setTooltipShown(true);
        }}
      >
        <CopyIcon />
      </button>

      <div
        className={classNames({
          "absolute z-10 bg-gray-900 text-white rounded p-2 text-xs transition-all ease-in-out translate-x-60 shadow-sm shadow-gray-500":
            true,
          "translate-y-10 opacity-0": !tooltipShown,
          "translate-y-6": tooltipShown,
        })}
      >
        Copied!
      </div>
    </>
  );
}
