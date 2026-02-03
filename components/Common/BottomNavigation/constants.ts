import { Ionicons } from "@expo/vector-icons";

interface NavItem {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}

export const navItems: NavItem[] = [
  { icon: "home-outline", label: "Home" },
  { icon: "folder-outline", label: "Folder" },
  { icon: "share-social-outline", label: "Share" },
  { icon: "person-outline", label: "Profile" },
];