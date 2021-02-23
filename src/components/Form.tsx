import React, { ChangeEvent, FormEvent } from "react";
import { StringParam, useQueryParam } from "use-query-params";
import { referenceSets } from "../config";
import { IBranch } from "../store";

type FormProps = {
  handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleHostChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleBranchChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleReferenceSetChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleQueryChange: (event: ChangeEvent<HTMLInputElement>) => void;
  hosts: string[];
  branches: IBranch[];
  referenceSet: string;
  query: string;
  scope: string;
};

const Form = ({
  handleFormSubmit,
  handleHostChange,
  handleBranchChange,
  handleReferenceSetChange,
  handleQueryChange,
  hosts,
  branches,
  scope,
  referenceSet,
  query,
}: FormProps) => {
  const [branch] = useQueryParam("b", StringParam);
  const [host] = useQueryParam("h", StringParam);
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row">
        {!scope && (
          <>
     
          </>
        )}
        <div className="col">
          <div className="form-group mb-md-0">
            <label htmlFor="query">Diagnose</label>
            <input
              id="query"
              className="form-control"
              type="text"
              value={query}
              autoComplete="off"
              onChange={handleQueryChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
