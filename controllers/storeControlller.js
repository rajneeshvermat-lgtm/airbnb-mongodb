const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(registeredHomes => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll().then(registeredHomes => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })
};

exports.getFavouriteList = async (req, res, next) => {
  try {
    const favourites = await Favourite.getFavourites();
    const registeredHomes = await Home.fetchAll();

    const favouriteHomeIds = favourites.map(fav => fav.houseId);

    const favouriteHomes = registeredHomes.filter(home =>
      favouriteHomeIds.includes(home._id.toString())
    );

    res.render("store/favourite-list", {
      favouriteHomes,
      pageTitle: "My Favourites",
      currentPage: "favourites",
    });
  } catch (err) {
    console.log("Error while fetching favourites:", err);
    next(err);
  }
};


exports.postAddToFavourite = async (req, res, next) => {
  try {
    const homeId = req.body.id;
    const fav = new Favourite(homeId);

    await fav.save();

    console.log("Favourite added");
    res.redirect("/favourites");
  } catch (err) {
    console.log("Error while marking favourite:", err);
    next(err);
  }
};


exports.postRemoveFromFavourite = async (req, res, next) => {
  try {
    const homeId = req.params.homeId;

    await Favourite.deleteById(homeId);

    res.redirect("/favourites");
  } catch (err) {
    console.log("Error while removing from favourites:", err);
    next(err);
  }
};



exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(home => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
  })
};