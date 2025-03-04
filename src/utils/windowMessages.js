import Swal from "sweetalert2";

const DEFAULT_ERROR_MESSAGE = "Something went wrong. Please try again later.";
const DEFAULT_SUCCESS_MESSAGE = "Successfully completed.";
const DEFAULT_INFORMATION_MESSAGE = "Please confirm your action.";
const DEFAULT_WARNING_MESSAGE = "Are you sure you want to do this?";
const DEFAULT_QUESTION_LOADING = "Your record is being saved.";

const DEFAULT_TIMER = 2000;

export const showMessage = async (options) => await Swal.fire(options);

export const showSuccessMessage = async ({
  text = DEFAULT_SUCCESS_MESSAGE,
  showConfirmButton = false,
  timer = DEFAULT_TIMER,
  ...rest
}) => {
  await showMessage({
    text,
    icon: "success",
    showConfirmButton,
    timer,
    ...rest,
  });
};

export const showErrorMessage = async ({
  text = DEFAULT_ERROR_MESSAGE,
  showConfirmButton = false,
  timer = DEFAULT_TIMER,
  ...rest
}) => {
  await showMessage({
    text,
    icon: "error",
    showConfirmButton,
    timer,
    ...rest,
  });
};

export const showInfoMessage = async ({
  text = DEFAULT_INFORMATION_MESSAGE,
  showConfirmButton = true,
  timer = DEFAULT_TIMER,
  ...rest
}) => {
  await showMessage({
    text,
    icon: "info",
    showConfirmButton,
    timer,
    ...rest,
  });
};

export const showWarningMessage = async ({
  text = DEFAULT_WARNING_MESSAGE,
  showConfirmButton = true,
  timer = DEFAULT_TIMER,
  ...rest
}) => {
  await showMessage({
    text,
    icon: "warning",
    showConfirmButton,
    timer,
    ...rest,
  });
};

export const showLoadingMessage = async ({
  text = DEFAULT_QUESTION_LOADING,
  showConfirmButton = false,
  ...rest
}) => {
  await showMessage({
    title: "Please wait...",
    text,
    allowOutsideClick: false,
    showConfirmButton,
    willOpen: () => {
      Swal.showLoading();
    },
    ...rest,
  });
};
