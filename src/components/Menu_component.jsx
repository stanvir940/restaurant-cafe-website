const Menu_component = (detail) => {
  const { img, name, title, catagorie1, catagorie2 } = detail.detail;
  console.log(detail.detail);
  return (
    <div>
      <div className="card bg-base-100 ml-4 md:w-96 shadow-xl hover:scale-105 mt-10">
        <figure className="">
          <img src={img} alt="Shoes" className="h-[250px] md:w-full" />
        </figure>
        <div className="card-body bg-white hover:bg-slate-100">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{title}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{catagorie1} </div>
            <div className="badge badge-outline">{catagorie2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu_component;
