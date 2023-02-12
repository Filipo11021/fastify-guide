import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Highly performant",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        As far as we know, Fastify is one of the fastest web frameworks in town,
        depending on the code complexity we can serve up to 30 thousand requests
        per second.
      </>
    ),
  },
  {
    title: "Schema based",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Even if it is not mandatory we recommend to use JSON Schema to validate
        your routes and serialize your outputs, internally Fastify compiles the
        schema in a highly performant function.
      </>
    ),
  },
  {
    title: "Extensible and Developer friendly",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Fastify is fully extensible via its hooks, plugins and decorators. The
        framework is built to be very expressive and to help developers in their
        daily use, without sacrificing performance and security.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
