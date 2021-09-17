const Intro = () => {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2
            className={`text-xs text-blue-400 tracking-widest font-medium title-font mb-1`}
          >
            Welcome to NFTCity's first drop
          </h2>
          <h1
            className={`sm:text-3xl text-2xl font-medium title-font mb-4 text-white`}
          >
            New York City Collection
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This NFT collection will be focused on exploring the beauty of the
            skyscrapers in New York City. We do this by first creating a scene
            in Blender. We then use this scene to render a beautiful base image.
            <img className="my-2" src="./assets/15/base.png" alt="base" />
            We then apply various different generative art techniques to this
            base image to create some truly breathe taking art.
            <img
              className="my-2"
              src="./assets/15/3 iterations/12.png"
              alt="base"
            />
            This initial drop will focus on various different scenes throughout
            New York City. These scenes will be used to generate around 1000
            unique images. We hope you enjoy the art. The minting date and
            minting price are TBD.
          </p>
          {/* <Solana /> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
