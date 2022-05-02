import React, { useEffect, useState } from "react";
import axios from "axios";
import purify from "dompurify";

export default function Search() {
  const [term, setTerm] = useState("programming");
  const [deboucedTerm, setDebouncedTerm] = useState(term);

  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: deboucedTerm,
        },
      });
      setResults(data.query.search);
    };

    if (!deboucedTerm) return;
    search();
  }, [deboucedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
            target="_blank"
            rel="noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>

          <div
            dangerouslySetInnerHTML={{
              __html: purify.sanitize(result.snippet),
            }}
          ></div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            className="input"
          />
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </div>
  );
}
