import { StarIcon } from "@heroicons/react/20/solid";
import SvgCercleDegradation from "../SVGDecoration/SvgCercleDegradation";

export default function TestimonialsWithStarRating() {
  return (
    <section className="bg-tacte-primary-50 px-6 py-24 sm:py-32 lg:px-8 relative isolate overflow-hidden">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1 text-indigo-600">
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
          <StarIcon aria-hidden="true" className="size-5 flex-none" />
        </div>
        <blockquote className="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
          <p>
            “Llevo viniendo desde hace 5 años y recomiendo 100% sus servicios.
            Me ha tratado varias lesiones, de las cuales he salido recuperada y
            también voy una vez al mes para revisiones periódicas y
            mantenimiento de mi dolor de espalda y gracias a lo que estudia y se
            forma, hemos podido conseguir una gran mejora. Es un gran
            profesional y una gran persona.”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          {/* <img
                        alt=""
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                        className="size-12 rounded-full bg-gray-50"
                    /> */}
          <div className="text-sm/6">
            <div className="font-semibold text-gray-900">Rocio Baeza</div>
            {/* <div className="mt-0.5 text-gray-600">
                            CEO of Workcation
                        </div> */}
          </div>
        </figcaption>
      </figure>

      <SvgCercleDegradation innerColor="#7775D6" color="#E935C1" />
    </section>
  );
}
