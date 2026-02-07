import React from "react";
import { PageLayout } from "../components/PageLayout";

const byline = [
  {
    name: "Ashley Mowreader",
    url: "https://www.latimes.com/people/nobody",
  },
];

export const Homepage = () => (
  <PageLayout>
    <div>
      <div className="container">
        <h1 className="headline">I Am Copying a News Page from The City</h1>
        <div className="attribution">
          <p className="byline">
            By{" "}
            {byline.map((author, i) => (
              <span key={i} className="author">
                <a href={author.url}>{author.name}</a>
                {i < byline.length - 2
                  ? ", "
                  : i < byline.length - 1
                  ? " and "
                  : ""}
              </span>
            ))}
          </p>
        </div>
      </div>

      <br />

      <div className="container">
        <p className="copy">
          I am not sure what to write here, so I am just going to fill this space
          with some placeholder text. This is supposed to be an article copied
          from The City, a news organization in New York City.
        </p>
        <p className="copy">
          This is the final part of my assignment and I am just happy to have it done I think. I had some trouble copying pages from other newsrooms, which was upsetting, but glad that The City made a useful ReadMe.md for me to follow for this project.
        </p>
      </div>
    </div>
  </PageLayout>
);
