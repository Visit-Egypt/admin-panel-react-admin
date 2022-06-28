import { RaRecord, Identifier } from "react-admin";

export type ThemeName = "light" | "dark";

export interface Category extends RaRecord {
  name: string;
}

export interface Product extends RaRecord {
  category_id: Identifier;
  description: string;
  height: number;
  image: string;
  price: number;
  reference: string;
  stock: number;
  thumbnail: string;
  width: number;
}

export interface Customer extends RaRecord {
  first_name: string;
  last_name: string;
  address: string;
  stateAbbr: string;
  city: string;
  zipcode: string;
  avatar: string;
  birthday: string;
  first_seen: string;
  last_seen: string;
  has_ordered: boolean;
  latest_purchase: string;
  has_newsletter: boolean;
  groups: string[];
  nb_commands: number;
  total_spent: number;
}

export interface Order extends RaRecord {
  status: OrderStatus;
  //   basket: BasketItem[];
  date: Date;
  total: number;
}

export type OrderStatus = "ordered" | "delivered" | "cancelled";
// ===============================================================
//  badges
// ===============================================================
export interface BadgeBase {
  /** Img Url */
  img_url: string;
  /** Place Id */
  place_id: string;
  /** City */
  city: string;
  /** Max Progress */
  max_progress: number;
  /** Title */
  title: string;
  /** Type */
  type: string;
  /** Xp */
  xp: number;
  /** Description */
  description: string;
  /** Badge Tasks */
  badge_tasks: BadgeTask[];
}
export interface Badge extends BadgeBase {
  id: string;
}
export interface BadgeTask {
  /** Imgurl */
  imgUrl: string;
  /** Tasktitle */
  taskTitle: string;
  /** Max Progress */
  max_progress: number;
}
export interface BadgeUpdateReq {
  /** Img Url */
  img_url?: string;
  /** Place Id */
  place_id?: string;
  /** Max Progress */
  max_progress?: number;
  /** Title */
  title?: string;
  /** Type */
  type?: string;
  /** Xp */
  xp?: number;
  /** Description */
  description?: string;
  /** Badge Tasks */
  badge_tasks?: BadgeTask[];
}
export interface BadgeUpdateRes extends BadgeBase {}

export interface BadgesPageResponse {
  /** Current Page */
  current_page: number;
  /** Content Range */
  content_range: number;
  /** Has Next */
  has_next: boolean;
  /** Badges */
  badges?: Badge[];
}
export interface BadgeDeleteReq {}

export interface BadgeDeleteRes {}

export interface BadgeCreateReq extends BadgeBase {}

export interface BadgeCreateRes extends Badge {}

// ===============================================================
// users
// ===============================================================
export interface UserAuthBody {
  /**
   * Email
   * Format: email
   */
  email: string;
  /** Password */
  password: string;
}
export interface UserGoogleAuthBody {
  /** Token */
  token: string;
}
export interface UserProfileFrame {
  /** Id */
  id: number;
  /** Imgurl */
  imgUrl: string;
  /** Type */
  type: number;
}
export interface UserBadge {
  /** Id */
  id: string;
  /**
   * Progress
   * @default 0
   */
  progress?: number;
  /**
   * Owned
   * @default false
   */
  owned?: boolean;
  /**
   * Pinned
   * @default false
   */
  pinned?: boolean;
}
export interface UserBadgeTask {
  /** Badge Id */
  badge_id: string;
  /** Tasktitle */
  taskTitle: string;
  /** Progress */
  progress: number;
}
export interface UserBadgeTaskUpdate {
  /** Progress */
  progress?: number;
  /** Owned */
  owned?: boolean;
  /** Pinned */
  pinned?: boolean;
}
export interface UserPlaceActivity {
  /** Id */
  id: string;
  /** Finished */
  finished: boolean;
  /** Progress */
  progress: number;
}
export interface UserRequestTripMate {
  /** Title */
  title: string;
  /** Description */
  description: string;
  /** Id */
  id: string;
  /** Initator Id */
  initator_id: string;
  /** Is Approved */
  is_approved: boolean;
}
export interface UserBase {
  /**
   * Email
   * Format: email
   */
  email: string;
  /** First Name */
  first_name?: string;
  /** Last Name */
  last_name?: string;
  /** Phone Number */
  phone_number?: string;
  /** Photo Link */
  photo_link?: string;
  /** Bio */
  bio?: string;
  /** Birthdate */
  birthdate?: string;
  /**
   * Interests
   * @default []
   */
  interests?: string[];
  /**
   * Followers
   * @default []
   */
  followers?: string[];
  /**
   * Following
   * @default []
   */
  following?: string[];
  /**
   * Trip Mate Requests
   * @default []
   */
  trip_mate_requests?: UserRequestTripMate[];
  /**
   * Fav Places
   * @default []
   */
  fav_places?: string[];
  /**
   * User Role
   * @default USER
   */
  user_role?: string;
  /**
   * Xp
   * @default 0
   */
  xp?: number;
  /**
   * Badges
   * @default []
   */
  badges?: UserBadge[];
  /**
   * Badge Tasks
   * @default []
   */
  badge_tasks?: UserBadgeTask[];
  /**
   * Placeactivities
   * @default []
   */
  placeActivities?: UserPlaceActivity[];

  profileFrame?: UserProfileFrame;
  /**
   * Postviews
   * @default []
   */
  postViews?: string[];
}
export interface User extends UserBase {
  id: string;
}
export interface UserCreate {
  /**
   * Email
   * Format: email
   */
  email: string;
  /** First Name */
  first_name?: string;
  /** Last Name */
  last_name?: string;
  /** Phone Number */
  phone_number?: string;
  /** Photo Link */
  photo_link?: string;
  /** Bio */
  bio?: string;
  /**
   * Birthdate
   * Format: date
   */
  birthdate?: string;
  /**
   * Interests
   * @default []
   */
  interests?: string[];
  /**
   * Followers
   * @default []
   */
  followers?: string[];
  /**
   * Following
   * @default []
   */
  following?: string[];
  /**
   * Trip Mate Requests
   * @default []
   */
  // trip_mate_requests?: components["schemas"]["RequestTripMateInDB"][];
  /**
   * Fav Places
   * @default []
   */
  fav_places?: string[];
  /** Password */
  password: string;
}
export interface UserResponse extends User {}

export interface UserResponseInTags {
  /** Id */
  id: string;
  /** First Name */
  first_name?: string;
  /** Last Name */
  last_name?: string;
  /** Photo Link */
  photo_link?: string;
}
export interface UserUpdate {
  /**
   * Email
   * Format: email
   */
  email?: string;
  /** First Name */
  first_name?: string;
  /** Last Name */
  last_name?: string;
  /** Phone Number */
  phone_number?: string;
  /** Photo Link */
  photo_link?: string;
  /**
   * Xp
   * @default 0
   */
  xp?: number;
  // profileFrame?: components["schemas"]["ProfileFrame"];
  /**
   * Postviews
   * @default 0
   */
  postViews?: number;
  /** Bio */
  bio?: string;
  /** Birthdate */
  birthdate?: string;
  /** Interests */
  interests?: string[];
  /**
   * Followers
   * @default []
   */
  followers?: string[];
  /**
   * Following
   * @default []
   */
  following?: string[];
  /**
   * Trip Mate Requests
   * @default []
   */
  // trip_mate_requests?: components["schemas"]["RequestTripMateInDB"][];
  /**
   * Fav Places
   * @default []
   */
  fav_places?: string[];
  /** Device Token */
  device_token?: string;
  /** Device Arn Endpoint */
  device_arn_endpoint?: string;
}
export interface UsersPageResponse {
  /** Current Page */
  current_page: number;
  /** Content Range */
  content_range: number;
  /** Has Next */
  has_next: boolean;
  /** Users */
  users?: User[];
}
export interface UsersTagsReq {
  /** Tags Ids */
  tags_ids: string[];
}

// ===============================================================
// place
// ===============================================================

export interface PlaceActivity {
  /** Id */
  id: string;
  /** Xp */
  xp: number;
  /** Customxp */
  customXp: boolean;
  /** Type */
  type: number;
  /** Title */
  title: string;
  /** Description */
  description: string;
  /** Duration */
  duration: string;
  /** Maxprogress */
  maxProgress: number;
}

export interface Explore {
  /** Id */
  id: string;
  /** Title */
  title: string;
  /** Imageurl */
  imageUrl: string;
  /** Hints */
  hints: Hint[];
}
export interface Hint {
  /** Hint */
  hint: string;
  /** Imageurl */
  imageUrl: string;
}
export interface PlaceReview {
  /** Rating */
  rating: number;
  /** Review */
  review?: string;
  /** User Id */
  user_id: string;
  /** User Name */
  user_name: string;
}
export interface PlaceBase {
  /** Title */
  title: string;
  /** Long Description */
  long_description?: string;
  /** Short Description */
  short_description?: string;
  /** Location Description */
  location_description?: string;
  /** Longitude */
  longitude?: number;
  /** Latitude */
  latitude?: number;
  /** Image Urls */
  image_urls?: string[];
  /** Default Image */
  default_image?: string;
  /** Opening Hours */
  opening_hours?: string;
  /** City */
  city?: string;
  /** Ticket Prices */
  ticket_prices?: { [key: string]: string };
  /** Category */
  category?: string;
  /**
   * Views
   * @default 0
   */
  views?: number;
  /** Explores */
  explores?: Explore[];
  /** Placeactivities */
  placeActivities?: PlaceActivity[];

  reviews: PlaceReview[];
}
export interface Place extends PlaceBase {
  id: string;
}
export interface PlacesPageResponse {
  /** Current Page */
  current_page: number;
  /** Content Range */
  content_range: number;
  /** Has Next */
  has_next: boolean;
  /** Places */
  places?: Place[];
}

export interface UpdatePlace {
  /** Title */
  title?: string;
  /** Description */
  description?: string;
  /** Location Description */
  location_description?: string;
  /** Longitude */
  longitude?: number;
  /** Latitude */
  latitude?: number;
  /** Image Urls */
  image_urls?: string[];
  /** Default Image */
  default_image?: string;
  /** Opening Hours */
  opening_hours?: string;
  /** City */
  city?: string;
  /**
   * Views
   * @default 0
   */
  views?: number;
  /** Explores */
  explores?: Explore[];
  /** Placeactivities */
  placeActivities?: PlaceActivity[];
}
export interface UserBadgeUpdate {
  /** Progress */
  progress?: number;
  /** Owned */
  owned?: boolean;
  /** Pinned */
  pinned?: boolean;
}

// ===============================================================
// items
// ===============================================================
export interface ItemBase {
  /** Title */
  title: string;
  /** Short Description */
  short_description: string;
  /** Long Description */
  long_description?: string;
  /** Default Image */
  default_image?: string;
  /** List Of Images */
  list_of_images?: string[];
  /** Place Id */
  place_id?: string;
}
export interface Item extends ItemBase {
  id: string;
}
export interface ItemUpdate {
  /** Title */
  title?: string;
  /** Short Description */
  short_description?: string;
  /** Long Description */
  long_description?: string;
  /** Default Image */
  default_image?: string;
  /** List Of Images */
  list_of_images?: string[];
  /** Place Id */
  place_id?: string;
}
export interface ItemsPageResponse {
  /** Current Page */
  current_page: number;
  /** Content Range */
  content_range: number;
  /** Has Next */
  has_next: boolean;
  /** Items */
  items?: Item[];
}

export interface GetTagResponse {
  /** Id */
  id: string;
  /** Name */
  name: string;
  /**
   * Description
   * @default
   */
  description?: string;
}

export interface Notification {
  /**
   * Title
   * @default
   */
  title?: string;
  /**
   * Description
   * @default
   */
  description?: string;
  /** Icon Url */
  icon_url?: string;
  /**
   * Sent Tags
   * @default []
   */
  // sent_tags?: components["schemas"]["GetTagResponse"][];
  /**
   * Sent Users Ids
   * @default []
   */
  sent_users_ids?: string[];
}

export interface PostBase {
  /** Caption */
  caption: string;
  /** List Of Images */
  list_of_images?: string[];
  /** Place Id */
  place_id: string;
  /** User Id */
  user_id: string;
  /** User Name */
  user_name: string;
  /** Likes */
  likes?: string[];
}
export interface PostsPageResponse {
  /** Current Page */
  current_page: number;
  /** Content Range */
  content_range: number;
  /** Has Next */
  has_next: boolean;
  /** Posts */
  // posts?: components["schemas"]["PostInDB"][];
}
export interface RefreshRequest {
  /** Access Token */
  access_token: string;
  /** Refresh Token */
  refresh_token: string;
}
export interface TagUpdate {
  /** Name */
  name?: string;
  /** Description */
  description?: string;
  /** Users */
  users?: string[];
  /** Posts */
  posts?: string[];
}
export interface Token {
  /** Access Token */
  access_token: string;
  /** Token Type */
  token_type: string;
  /** Refresh Token */
  refresh_token: string;
  /** User Id */
  user_id: string;
}

export interface UpdatePost {
  /** Caption */
  caption?: string;
  /** List Of Images */
  list_of_images?: string[];
}
export interface UploadConfirmation {
  /** Images Keys */
  images_keys: string[];
  /** Error Images */
  error_images?: string[];
  /** User Id */
  user_id: string;
}
export interface UploadConfirmationResponse {
  /** Message */
  message: string;
  /** Status Code */
  status_code: number;
}
export interface UploadOptions {
  /** File Size */
  file_size?: string;
  /** Presigned Url Interval */
  presigned_url_interval?: string;
}
export interface UploadResponse {
  /** Url */
  url: string;
  /** Fields */
  fields: { [key: string]: unknown };
  // options?: components["schemas"]["UploadOptions"];
}

export interface ValidationError {
  /** Location */
  loc: string[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

export interface Invoice extends RaRecord {}

export type ReviewStatus = "accepted" | "pending" | "rejected";

export interface Review extends RaRecord {
  date: Date;
  status: ReviewStatus;
  customer_id: Identifier;
  product_id: Identifier;
}

declare global {
  interface Window {
    restServer: any;
  }
}
