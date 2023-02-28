import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  name: {
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  email: {
    fontSize: 11,
    lineHeight: 13,
    color: "#212121CC",
  },
  post: {
    marginBottom: 32,
    borderRadius: 8,
  },
  postImg: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
    marginLeft: 3,
  },
  descrContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentsCount: {
    marginLeft: 6,
    color: "#BDBDBD",

    fontSize: 16,
    lineHeight: 19,
  },
  commentsBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
});
