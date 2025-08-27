import ProjectItem from "./ProjectItem";

import postship from "../../assets/projects/postship.png";
import instavid from "../../assets/projects/instavid.png";

export default function Work() {
  return (
    <>
      <section id="work-projects" className="sm:px-16 px-6">
        <h2>Workplace Projects</h2>
        <div className="flex flex-wrap gap-12 py-3 px-2 justify-center">
          <ProjectItem
            title={"PostShip – Shopify Shipment Tracking App"}
            text="PostShip is a backend-focused Shopify app that helps brands provide real-time shipment tracking to their customers. It reads orders from Shopify, maps them to shipments and carrier IDs, and polls multiple courier sources to deliver up-to-date status information. The system leverages AWS SQS for message queuing, async polling, and resync mechanisms to ensure scalability and reliability. Alongside the backend, we also built a Shopify embedded app that gives each brand a customer-facing page where buyers can track orders and access brand-specific post-purchase information—reducing support queries and enhancing customer experience."
            githubURL={""}
            websiteURL={""}
            initialImage={postship}
            devProgress={"done"}
            tags={[
              "shopify",
              "aws",
              "sqs",
              "node.js",
              "backend",
              "embedded-app",
              "shipments",
            ]}
          />

          <ProjectItem
            title={"Instavid – Shoppable Video Platform"}
            text="Instavid is a Shopify app that brings shoppable, short-form videos to e-commerce stores. It allows brands to import videos from Instagram, TikTok, or manual uploads, and display them through interactive widgets like carousels, story-style reels, floating videos, and banners to boost engagement and conversions. The platform tracks detailed analytics including impressions, clicks, views, add-to-carts, and orders via a high-volume web pixel system that streams thousands of events through AWS SQS for scalable processing. Videos are optimized with S3 and CloudFront for efficient storage and delivery, ensuring smooth playback across devices. Instavid also features an embedded Shopify app, providing merchants with seamless integration and a branded customer-facing experience. Trusted by well-known brands such as Mcaffeine, Hyphen, and Renee, it enables data-driven insights and a modern shopping experience that blends content with commerce."
            githubURL={""}
            websiteURL={""}
            initialImage={instavid}
            devProgress={"done"}
            tags={[
              "shopify",
              "videos",
              "s3",
              "cloudfront",
              "aws",
              "sqs",
              "analytics",
              "embed-app",
            ]}
          />
        </div>
      </section>
    </>
  );
}
