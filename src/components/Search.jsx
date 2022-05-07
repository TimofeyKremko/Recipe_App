import styledComponents from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Search food..."
        />
      </div>
    </FormStyle>
  );
}
const FormStyle = styledComponents.form`
  position: relative;
  div {
  width: 100%;
  display: flex;
  justify-content: center;
  }
  input {
    border:none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color:#fff;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    min-width: 300px;
    max-width: 40%;
  }
`;
export default Search;
