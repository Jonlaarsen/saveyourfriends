const FooterComponent = () => {
  return (
    <div className="h-25 bg-secondary text-zinc-800 flex justify-between px-10 items-center">
      <div className="flex flex-col items-start justify-evenly">
        <a className="font-mono" href="mailto:hello@example.com">
          contact
        </a>
        <a className="font-mono" href="/tops">
          blog
        </a>
        <a className="font-mono" href="/tops">
          about
        </a>
      </div>

      <h1 className="md:text-5xl font-uni">Save Your Friends</h1>
      <div className="flex flex-col items-end justify-evenly">
        <a className="font-mono" href="/tops">
          tops
        </a>
        <a className="font-mono" href="/bottoms">
          bottoms
        </a>
        <a className="font-mono" href="/accesories">
          accesories
        </a>
      </div>
    </div>
  );
};

export default FooterComponent;
