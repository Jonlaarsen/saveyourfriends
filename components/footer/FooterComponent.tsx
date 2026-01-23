const FooterComponent = () => {
  return (
    <div className="h-25 bg-secondary text-zinc-800 flex justify-evenly items-center">
      <a className="font-mono" href="mailto:hello@example.com">
        contact
      </a>
      <h1 className="md:text-xl">Marleys Hoodies</h1>
      <a className="font-mono" href="/hoodies">
        hoodies
      </a>
    </div>
  );
};

export default FooterComponent;
