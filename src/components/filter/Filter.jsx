import classes from "./filter.module.scss";
const Filter = () => {
  return (
    <div className={classes.filter__container}>
      <p className={classes.filter__heading}>FILTER BY PRICE</p>
      <div className={`${classes.inputs__container} d-flex  gap-2`}>
        <div>
          <label for="min"> Min </label>
          <input type="number" id="min" placeholder="insert min value" />
        </div>
        <div>
          <label for="max"> Max </label>
          <input type="number" placeholder="insert Max value" id="max" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
