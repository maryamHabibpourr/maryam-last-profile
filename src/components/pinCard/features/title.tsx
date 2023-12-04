import classNames from "classnames";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useFeatureStore } from "./store";
import { GithubIcon } from "../../../assets/icons/github";

type Props = {
  id: string;
  title: string;
  description: string;
  source_code_link: string;
  tags: { name: string; color: string }[];
};

export const FeatureTitle = ({
  title,
  description,
  source_code_link,
  tags,
  id,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const documentRef = useRef(document);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    // NOTE: The only reason we pass in the document here, is because
    // of security restrictions set by the browser when using an iFrame.
    // In an iFrame (so eg in the preview on frontend.fyi),
    // margin won't take effect unless you specify the root manually.
    // By default it will be the window element, which is what we want in this case.
    // If you specify your own root, you can usually only pass in an Element, and
    // not the document (since document/window is the default). However, in order
    // to fix the issue in the iframe, we need to pass in the document here and thus
    // tell TypeScript that we know what we're doing. If you're implementing
    // this in your own website, you can just pass in the root property as well as the documentRef.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    root: documentRef,
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <div
      ref={ref}
      className={classNames(
        "feature-title py-40 font-heading text-5xl transition-colors ",
        isInView ? "text-black" : "text-gray-300"
      )}
    >
      <h2 className="base-color font-bold text-[35px] mb-4">{title}</h2>
      <p className="mt-2 text-white text-[25px] font-medium">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    
      <div className="m-2 flex justify-end">
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="mt-4 flex items-center text-[#dcff50] text-[12px] cursor-pointer"
        >
          <GithubIcon className="mr-2 inline h-5 w-5" />
          Import GitHub project
        </div>
      </div>
    </div>
  );
};
