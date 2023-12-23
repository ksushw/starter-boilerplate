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
    breadcrumb: false,
    submenu: [
      {
        key: "dashboard",
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: "Дашборд",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "gods",
            path: `${APP_PREFIX_PATH}/dashboard/gods`,
            title: "Товары",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "categories",
            path: `${APP_PREFIX_PATH}/dashboard/categories`,
            title: "Категории",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "collections",
            path: `${APP_PREFIX_PATH}/dashboard/collections`,
            title: "Коллекции",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "combos",
            path: `${APP_PREFIX_PATH}/dashboard/home`,
            title: "Комбо",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "cataloge",
        path: `${APP_PREFIX_PATH}/cataloge`,
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "orders",
        path: `${APP_PREFIX_PATH}/orders`,
        title: "Заказы",
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "clients",
        path: `${APP_PREFIX_PATH}/clients`,
        title: "Клиенты",
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "clients-list",
            path: `${APP_PREFIX_PATH}/clients/list`,
            title: "Список клиентов",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "clients-groops",
            path: `${APP_PREFIX_PATH}/clients/groops`,
            title: "Группы клиентов",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "banners",
        path: `${APP_PREFIX_PATH}/banners`,
        title: "Баннеры",
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "promo-codes",
        path: `${APP_PREFIX_PATH}/promo-codes`,
        title: "Промокоды",
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "offline-sites",
        path: `${APP_PREFIX_PATH}/offline-sites`,
        title: "Оффлайн точки",
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "addresses",
            path: `${APP_PREFIX_PATH}/offline-sites/addresses`,
            title: "Адреса",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "geo-zones",
            path: `${APP_PREFIX_PATH}/offline-sites/home`,
            title: "Геозоны",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "workers",
        path: `${APP_PREFIX_PATH}/workers`,
        title: "Сотрудники",
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "mailings",
        path: `${APP_PREFIX_PATH}/mailings`,
        title: "Рассылки",
        icon: MailOutlined,
        breadcrumb: false,
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
    breadcrumb: false,
    submenu: [
      {
        key: "settings",
        path: `${APP_PREFIX_PATH}/settings`,
        title: "Настройки",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "mobule",
        path: `${APP_PREFIX_PATH}/mobule`,
        title: "Мобильное приложение",
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "logs",
        path: `${APP_PREFIX_PATH}/logs`,
        title: "Логи",
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...settingsNavTree];

export default navigationConfig;
