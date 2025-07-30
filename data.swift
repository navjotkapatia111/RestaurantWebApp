{
statusCode: 0,
data: {
statusMessage: "done successfully",
pageOffset: {
nextOffset: "CJhqEK9SKICAy6jJ4LSaCzDFDjgC",
widgetOffset: {}
},
cards: [
{
card: {
card: {
@type: "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
collectionId: "83631",
title: "Pizza",
description: "Cheesilicious pizzas to make every day extraordinary.",
imageId: "COLLECTIONS/IMAGES/MERCH/2024/8/20/60f66049-cfcc-4f0b-891f-624938aac2bc_Pizza (6).png",
aspectRatio: "3.44",
cta: {
link: "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza,pizza,ads_pc_pizza",
type: "collectionv2"
},
type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
count: "206 restaurants"
}
}
},
{
card: {
card: {
@type: "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
sortConfigs: [
{
key: "relevance",
title: "Relevance (Default)",
selected: true,
defaultSelection: true
},
{
key: "deliveryTimeAsc",
title: "Delivery Time"
},
{
key: "modelBasedRatingDesc",
title: "Rating"
},
{
key: "costForTwoAsc",
title: "Cost: Low to High"
},
{
key: "costForTwoDesc",
title: "Cost: High to Low"
}
],
restaurantCount: 206,
facetList: [
{
label: "10 Mins Delivery",
id: "isRestaurantBolt",
selection: "SELECT_TYPE_SINGLESELECT",
facetInfo: [
{
label: "10 Mins Delivery",
id: "isRestaurantBoltfacetquery0",
analytics: { },
openFilter: true
}
],
viewType: "VIEW_TYPE_FLATTENED",
subLabel: "Filterby",
icon: "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
},
{
label: "Veg/Non-Veg",
id: "isVeg",
selection: "SELECT_TYPE_MULTISELECT",
facetInfo: [
{
label: "Non Veg",
id: "isVegfacetquery0",
analytics: { },
openFilter: true
},
{
label: "Pure Veg",
id: "isVegfacetquery1",
analytics: { },
openFilter: true
}
],
viewType: "VIEW_TYPE_HALF_CARD",
subLabel: "Filterby",
openFilter: true
},
{
label: "Ratings",
id: "rating",
selection: "SELECT_TYPE_MULTISELECT",
facetInfo: [
{
label: "Ratings",
id: "ratingfacetquery0",
analytics: { },
openFilter: true
},
{
label: "Ratings 4.0+",
id: "ratingfacetquery1",
analytics: { },
openFilter: true
},
{
label: "Ratings 4.5+",
id: "ratingfacetquery2",
analytics: { },
openFilter: true
}
],
viewType: "VIEW_TYPE_HALF_CARD",
subLabel: "Filterby",
openFilter: true
},
{
label: "Delivery Time",
id: "deliveryTime",
selection: "SELECT_TYPE_MULTISELECT",
facetInfo: [
{
label: "Less than 30 mins",
id: "deliveryTimefacetquery0",
analytics: { },
openFilter: true
},
{
label: "Less than 45 mins",
id: "deliveryTimefacetquery1",
analytics: { },
openFilter: true
}
],
viewType: "VIEW_TYPE_HALF_CARD",
subLabel: "Filterby",
openFilter: true
},
{
label: "Cost For Two",
id: "costForTwo",
selection: "SELECT_TYPE_MULTISELECT",
facetInfo: [
{
label: "Less than Rs. 300",
id: "costForTwofacetquery0",
analytics: { },
openFilter: true
},
{
label: "Rs.300 - Rs.600",
id: "costForTwofacetquery1",
analytics: { },
openFilter: true
},
{
label: "Greater than Rs. 600",
id: "costForTwofacetquery2",
analytics: { },
openFilter: true
}
],
viewType: "VIEW_TYPE_HALF_CARD",
subLabel: "Filterby",
openFilter: true
}
]
}
}
},
{
card: {
card: {
@type: "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
layout: {
rows: 1,
widgetPadding: {
left: 16,
right: 16
},
scrollBar: { },
widgetTheme: {
defaultMode: {
backgroundColour: "#FFFFFF",
theme: "THEME_TYPE_LIGHT"
},
darkMode: {
backgroundColour: "#1B3028",
theme: "THEME_TYPE_DARK"
}
}
},
id: "restaurantCountWidget",
gridElements: {
infoWithStyle: {
@type: "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
text: "206 Restaurants to explore",
headerStyling: {
textSize: 15,
textColor: "text_color_highest_emphasis",
textFontName: "FONT_NAME_HEADER_H5",
maxLines: 1
}
}
}
}
}
},
{
card: {
card: {
@type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "42240",
name: "Domino's Pizza",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/10870264-3e3c-4b41-b8c6-5101d0377307_42240.JPG",
locality: "Sector 8",
areaName: "Sector 8",
costForTwo: "₹700 for two",
cuisines: [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
avgRating: 4.4,
parentId: "2456",
avgRatingString: "4.4",
totalRatingsString: "3.4K+",
promoted: true,
adTrackingId: "cid=26314585~p=0~adgrpid=26314585#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=42240~eid=9efa4788-2940-49ea-819f-8851161a17b6~srvts=1741674203081~collid=83631",
sla: {
deliveryTime: 25,
lastMileTravel: 1.9,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "1.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-03-12 01:55:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-Pizza.png",
description: "Delivery!"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
imageId: "Rxawards/_CATEGORY-Pizza.png",
description: "Delivery!"
}
}
]
},
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.1",
ratingCount: "2.1K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "26314585",
requestContexts: [
"no_rush_dynamic_delfee"
]
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=42240&source=collection&query=Pizza",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
@type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "48684",
name: "Captain Sam's Pizza",
cloudinaryImageId: "e1a0833bdc40ad1f6fe3185f102c9382",
locality: "Sector 9",
areaName: "Sector 9",
costForTwo: "₹200 for two",
cuisines: [
"Pizzas",
"Italian",
"Beverages",
"Desserts",
"Fast Food",
"Snacks",
"Pastas",
"Sweets",
"Cakes & Pastries"
],
avgRating: 4.1,
parentId: "382786",
avgRatingString: "4.1",
totalRatingsString: "6.1K+",
sla: {
deliveryTime: 24,
lastMileTravel: 1.6,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "1.6 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-03-11 23:59:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "bolt/Bolt%20Listing%20badge@3x.png",
description: "bolt!"
},
{
imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
description: "Delivery!"
},
{
imageId: "Rxawards/_CATEGORY-Pizza.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
imageId: "bolt/Bolt%20Listing%20badge@3x.png",
description: "bolt!"
}
},
{
attributes: {
description: "Delivery!",
imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
}
},
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹29",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.0",
ratingCount: "744"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
requestContexts: [
"no_rush_dynamic_delfee"
]
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=48684&source=collection&query=Pizza",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
@type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "433499",
name: "Chicago Pizza",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/7/9/e43d5733-0347-42a4-ba02-9b41f2537a6f_e7b1f907-d530-4efa-8eab-8ab0b92b5d00.jpg",
locality: "Industrial Area Phase 1",
areaName: "Industrial Area Phase 1",
costForTwo: "₹500 for two",
cuisines: [
"Pizzas"
],
avgRating: 4,
parentId: "60277",
avgRatingString: "4.0",
totalRatingsString: "230",
promoted: true,
adTrackingId: "cid=26231279~p=2~adgrpid=26231279#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=433499~eid=66a34e52-af66-4ea7-8fcd-aff5e855b7e0~srvts=1741674203081~collid=83631",
sla: {
deliveryTime: 35,
lastMileTravel: 5,
serviceability: "SERVICEABLE",
slaString: "30-35 mins",
lastMileTravelString: "5.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-03-11 22:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textExtendedBadges: { },
textBased: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹119",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "3.9",
ratingCount: "101"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "26231279",
requestContexts: [
"no_rush_dynamic_delfee"
]
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=433499&source=collection&query=Pizza",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
@type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "106055",
name: "La Pino'z Pizza",
cloudinaryImageId: "fco6bt4rjqr7hztnqwxo",
locality: "Sec 27",
areaName: "Sector 27",
costForTwo: "₹300 for two",
cuisines: [
"Pizzas",
"Italian",
"Pastas",
"Mexican",
"Desserts",
"Beverages",
"Snacks",
"Combos",
"Fast Food"
],
avgRating: 4.5,
parentId: "4961",
avgRatingString: "4.5",
totalRatingsString: "12K+",
sla: {
deliveryTime: 27,
lastMileTravel: 1.7,
serviceability: "SERVICEABLE",
slaString: "25-30 mins",
lastMileTravelString: "1.7 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-03-12 01:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "bolt/Bolt%20Listing%20badge@3x.png",
description: "bolt!"
},
{
imageId: "Rxawards/_CATEGORY-Pizza.png",
description: "Delivery!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "bolt!",
imageId: "bolt/Bolt%20Listing%20badge@3x.png"
}
},
{
attributes: {
imageId: "Rxawards/_CATEGORY-Pizza.png",
description: "Delivery!"
}
}
]
},
textExtendedBadges: { },
textBased: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹79",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
requestContexts: [
"no_rush_dynamic_delfee"
]
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=106055&source=collection&query=Pizza",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
@type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "505258",
name: "Jamie Oliver's Pizzeria",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/10/6a6dd7cd-5c20-48a6-9754-9788d141e28d_505258.JPG",
locality: "Industrial Area Phase 1",
areaName: "Industrial Area Phase 1",
costForTwo: "₹700 for two",
cuisines: [
"Pizzas",
"Italian",
"Pastas",
"Beverages",
"Salads"
],
avgRating: 4.3,
parentId: "109458",
avgRatingString: "4.3",
totalRatingsString: "210",
promoted: true,
adTrackingId: "cid=26217833~p=3~adgrpid=26217833#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=505258~eid=7a4b3781-ced1-4ccc-9f26-f3d86063d341~srvts=1741674203081~collid=83631",
sla: {
deliveryTime: 40,
lastMileTravel: 5,
serviceability: "SERVICEABLE",
slaString: "40-45 mins",
lastMileTravelString: "5.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-03-12 00:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textExtendedBadges: { },
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
description: "Gourmet",
imageId: "newg.png"
}
}
]
}
}
},
aggregatedDiscountInfoV3: {
header: "50% OFF",
subHeader: "UPTO ₹100",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.1",
ratingCount: "138"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "26217833",
requestContexts: [
"no_rush_dynamic_delfee"
]
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=505258&source=collection&query=Pizza",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
@type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "136632",
name: "Daminic Pizza",
cloudinaryImageId: "oo2ecoq14tcingci5d37",
locality: "Sector 19",
areaName: "Sector 19",
costForTwo: "₹149 for two",
cuisines: [
"Pizzas",
"Fast Food",
"Pastas",
"Beverages",
"Desserts",
"Chinese",
"sandwich",
"Burgers"
],
avgRating: 4.2,
parentId: "488980",
avgRatingString: "4.2",
totalRatingsString: "13K+",
sla: {
deliveryTime: 22,
lastMileTravel: 0.8,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "0.8 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-03-11 23:55:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "bolt/Bolt%20Listing%20badge@3x.png",
description: "bolt!"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
description: "bolt!",
imageId: "bolt/Bolt%20Listing%20badge@3x.png"
}
}
]
},
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹125 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL",
discountCalloutInfo: {
message: "Free Delivery",
logoCtx: {
logo: "v1655895371/free_delivery_logo_hqipbo.png"
}
},
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "2.7",
ratingCount: "43"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
requestContexts: [
"no_rush_dynamic_delfee"
]
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=136632&source=collection&query=Pizza",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
@type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "805211",
name: "Olio - The Wood Fired Pizzeria",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/3/12/aacdbe41-787e-42ef-b36b-1cd9327978c7_956be4ec-c0bc-4927-9b57-b50cdaa81a57.jpg_compressed",
locality: "Chandigarh",
areaName: "SECTOR 24",
costForTwo: "₹300 for two",
cuisines: [
"Pizzas",
"Pastas",
"Italian",
"Fast Food",
"Snacks",
"Beverages",
"Desserts"
],
avgRating: 4.3,
parentId: "11633",
avgRatingString: "4.3",
totalRatingsString: "1.0K+",
promoted: true,
adTrackingId: "cid=26319606~p=5~adgrpid=26319606#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=805211~eid=6cc7bf9c-a5a1-4d21-96fb-1de05acf7ae8~srvts=1741674203081~collid=83631",
sla: {
deliveryTime: 30,
lastMileTravel: 3.9,
serviceability: "SERVICEABLE",
slaString: "25-30 mins",
lastMileTravelString: "3.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-03-12 05:29:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Gourmet"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textExtendedBadges: { },
textBased: { },
imageBased: {
badgeObject: [
{
attributes: {
imageId: "newg.png",
description: "Gourmet"
}
}
]
}
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹99",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "26319606",
requestContexts: [
"no_rush_dynamic_delfee"
]
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=805211&source=collection&query=Pizza",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
}
],
firstOffsetRequest: true,
nextFetch: 3
},
tid: "686bb635-eab1-4acf-85b7-db8fa99da4a6",
sid: "jeabc0ce-574a-4455-94e2-abea7b074314",
deviceId: "fc7227a7-0d98-0bc3-e155-fe2e414b167a",
csrfToken: "vBTGo7l111gB--oESz5fPC5Q7b_pyunn1l6zbHAE"
}