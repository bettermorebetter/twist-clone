import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { StringLiteral } from "typescript";
import { useRouter } from "next/router";
import useMutation from "@/libs/client/useMutation";

interface MutationResult {
  ok: boolean;
}

const Enter: NextPage = () => {
  const [enter, { loading, data, error }] =
    useMutation<MutationResult>("/api/users/enter");
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation<MutationResult>("/api/users/confirm");
  return (
    <div className="mt-16 px-4">
      {/* Title */}
      {data?.ok ? (
        // if data.ok is true, show confirm token button.
        <form>
          <input></input>
          <button></button>
        </form>
      ) : (
        // if data.ok is false, show email form.
        <>
          <div
            className="flex justify-center p-4
      text-3xl"
          >
            <p>Enter to Carrot</p>
          </div>
          <div className="text-lg flex justify-center">
            <p>Enter using</p>
          </div>
          <div className="flex justify-between px-32 py-8">
            <p>Email</p>
            <p>Phone</p>
          </div>
          <div>
            <p>Email address</p>
            <form
              className="flex flex-col px-4 py-4
        space-y-2"
            >
              <input
                type="string"
                className="bg-gray-200
          rounded-lg"
              ></input>
              <input type="submit" className=""></input>
            </form>
          </div>
        </>
      )}

      {/* Email form */}
    </div>
  );
};
export default Enter;
