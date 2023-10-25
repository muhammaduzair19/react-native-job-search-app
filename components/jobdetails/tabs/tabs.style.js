import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginBottom: SIZES.small / 2,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    backgroundColor: name === activeTab ? '#FE7654' : COLORS.lightWhite,
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.medium,
    color: name === activeTab ? COLORS.lightWhite : "black",
  }),
});

export default styles;
