import { element } from "../utils/dom.js";
function projectLink(url, label, title) {
  const external = /^https:\/\//.test(url);
  return element("a", {
    text: label + " ↗",
    attributes: {
      href: url,
      "aria-label": label + ": " + title,
      ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
    },
  });
}
export function createProjectCard(project) {
  const artwork = project.image
    ? element("div", { className: "project-art screenshot" }, [
        element("img", {
          attributes: {
            src: project.image,
            alt: project.title + " application preview",
            loading: "lazy",
            width: "900",
            height: "560",
          },
        }),
      ])
    : element(
        "div",
        {
          className: "project-art " + project.art,
          attributes: { "aria-hidden": "true" },
        },
        [
          element("div", { className: "mini-window" }, [
            element("span", { text: "JAVASCRIPT EXPERIMENT" }),
            element("strong", { text: project.preview }),
            element("div", { className: "mini-bars" }),
            element("br"),
          ]),
        ],
      );
  const links = element("div", { className: "project-links" }, [
    projectLink(
      project.url,
      project.url === project.source ? "View source" : "Live demo",
      project.title,
    ),
  ]);
  if (project.source && project.source !== project.url)
    links.append(projectLink(project.source, "Source code", project.title));
  return element("article", { className: "project" }, [
    artwork,
    element("div", { className: "project-body" }, [
      element("div", { className: "project-top" }, [
        element("span", { text: project.category.toUpperCase() }),
        element("span", { text: project.status }),
      ]),
      element("h3", { text: project.title }),
      element("p", { text: project.description }),
      element(
        "div",
        { className: "tech" },
        project.technologies.map((text) => element("span", { text })),
      ),
      links,
    ]),
  ]);
}
