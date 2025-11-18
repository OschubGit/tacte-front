import { StarIcon } from "@heroicons/react/20/solid";
import SvgCercleDegradation from "../SVGDecoration/SvgCercleDegradation";
import GoogleReviewsWidget from "google-reviews-widget";
import { ReactGoogleReviews } from "react-google-reviews";

export default function TestimonialsWithStarRating() {
  return (
    <section className="bg-tacte-primary-50 px-6 py-24 sm:py-32 lg:px-8 relative isolate overflow-hidden text-lg">
      {/* <GoogleReviewsWidget instanceId="zMTkrueNMveKFlxLjFC5" /> */}
      <ReactGoogleReviews
        layout="carousel"
        featurableId="ba784cea-addd-4cfd-b8d0-b3ea2e0ed1df"
      />
      <SvgCercleDegradation innerColor="#7775D6" color="#E935C1" />
    </section>
  );
}
