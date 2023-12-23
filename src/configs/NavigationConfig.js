import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  ShopOutlined,
  GiftOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  PictureOutlined,
  FileTextOutlined,
  MobileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "home",
    path: `${APP_PREFIX_PATH}/home`,
    title: "Основные",
    icon: DashboardOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "dashboard",
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: "Дашборд",
        icon: DashboardOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "gods",
            path: `${APP_PREFIX_PATH}/dashboard/gods`,
            title: "Товары",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "categories",
            path: `${APP_PREFIX_PATH}/dashboard/categories`,
            title: "Категории",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "collections",
            path: `${APP_PREFIX_PATH}/dashboard/collections`,
            title: "Коллекции",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "combos",
            path: `${APP_PREFIX_PATH}/dashboard/home`,
            title: "Комбо",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "cataloge",
        path: `${APP_PREFIX_PATH}/cataloge`,
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "orders",
        path: `${APP_PREFIX_PATH}/orders`,
        title: "Заказы",
        icon: ShoppingOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "clients",
        path: `${APP_PREFIX_PATH}/clients`,
        title: "Клиенты",
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "clients-list",
            path: `${APP_PREFIX_PATH}/clients/list`,
            title: "Список клиентов",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "clients-groops",
            path: `${APP_PREFIX_PATH}/clients/groops`,
            title: "Группы клиентов",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "banners",
        path: `${APP_PREFIX_PATH}/banners`,
        title: "Баннеры",
        icon: PictureOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "promo-codes",
        path: `${APP_PREFIX_PATH}/promo-codes`,
        title: "Промокоды",
        icon: GiftOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "offline-sites",
        path: `${APP_PREFIX_PATH}/offline-sites`,
        title: "Оффлайн точки",
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "addresses",
            path: `${APP_PREFIX_PATH}/offline-sites/addresses`,
            title: "Адреса",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "geo-zones",
            path: `${APP_PREFIX_PATH}/offline-sites/home`,
            title: "Геозоны",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "workers",
        path: `${APP_PREFIX_PATH}/workers`,
        title: "Сотрудники",
        icon: UsergroupAddOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "mailings",
        path: `${APP_PREFIX_PATH}/mailings`,
        title: "Рассылки",
        icon: MailOutlined,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const settingsNavTree = [
  {
    key: "home",
    path: `${APP_PREFIX_PATH}/home`,
    title: "Системные",
    icon: DashboardOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "settings",
        path: `${APP_PREFIX_PATH}/settings`,
        title: "Настройки",
        icon: SettingOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "mobule",
        path: `${APP_PREFIX_PATH}/mobule`,
        title: "Мобильное приложение",
        icon: MobileOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "logs",
        path: `${APP_PREFIX_PATH}/logs`,
        title: "Логи",
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...settingsNavTree];

export default navigationConfig;
