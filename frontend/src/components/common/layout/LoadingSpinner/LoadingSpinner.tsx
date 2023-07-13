import spinnerStyles from "./loadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={spinnerStyles.spinnerContainer}>
      <div className={spinnerStyles.loadingSpinner}></div>
    </div>
  );
}
