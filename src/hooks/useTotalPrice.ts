import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store.ts";
import { useEffect, useState } from "react";
import BillingEnum from "../enums/BillingEnum.ts";
import { setTotal } from "../store/appSlice.ts";
import AddonsEnum from "../enums/AddonsEnum.ts";

const useTotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [addonsPrices, setAddonsPrices] = useState<number[]>([]);
  const billing = useSelector((state: RootState) => state.billing);
  const billingPrice = useSelector((state: RootState) => state.billingPrice);
  const addonsSelected = useSelector(
    (state: RootState) => state.addonsSelected
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const addonsInfo = [
      {
        name: AddonsEnum.ONLINE_SERVICE,
        priceMonthly: 1,
        priceYearly: 10,
      },
      {
        name: AddonsEnum.LARGER_STORAGE,
        priceMonthly: 2,
        priceYearly: 20,
      },
      {
        name: AddonsEnum.CUSTOMIZABLE_PROFILE,
        priceMonthly: 2,
        priceYearly: 20,
      },
    ];

    let total = billingPrice;
    addonsSelected.forEach((selectedAddon) => {
      const addon = addonsInfo.find((addon) => addon.name === selectedAddon);
      if (addon) {
        const price =
          billing === BillingEnum.Yearly
            ? addon.priceYearly
            : addon.priceMonthly;
        total += price;
        setAddonsPrices((prev) => [...prev, price]);
      }
    });
    setTotalPrice(total);
    dispatch(setTotal(total));
  }, [addonsSelected, billing, billingPrice, dispatch]);

  return {
    totalPrice,
    addonsPrices,
  };
};

export default useTotalPrice;
