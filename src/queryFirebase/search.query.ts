const getFirestore = () => import("../firebase/firestore");

//BAD METHOD
export const getFirstTenCompanies = async () => {
  try {
    const { db, collection, query, getDocs, limit } = await getFirestore();
    const companiesCollection = collection(db, "company");
    const companiesQuery = query(companiesCollection, limit(10));

    const querySnapshot = await getDocs(companiesQuery);

    const companiesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return companiesData;
  } catch (error) {
    console.error("Error fetching first ten companies:", error);
    throw error;
  }
};

//BAD METHOD
export const filterCompanies = async (
  name: string,
  city: string,
  sector: string,
  postalCode: string,
  plageHoraire: string,
  adresse: string
) => {
  try {
    const { db, collection, query, getDocs, where, limit } =
      await getFirestore();

    let companiesQuery = query(collection(db, "company"));

    if (name) {
      companiesQuery = query(
        companiesQuery,
        where("name", ">=", name),
        where("name", "<=", name + "\uf8ff")
      );
    }

    if (city) {
      companiesQuery = query(companiesQuery, where("city", "==", city));
    }

    if (sector) {
      companiesQuery = query(
        companiesQuery,
        where("sector", ">=", sector),
        where("sector", "<=", sector + "\uf8ff")
      );
    }

    if (postalCode) {
      companiesQuery = query(
        companiesQuery,
        where("postalCode", "==", postalCode)
      );
    }

    if (plageHoraire) {
      companiesQuery = query(
        companiesQuery,
        where("horaire", "==", plageHoraire)
      );
    }

    if (adresse) {
      companiesQuery = query(companiesQuery, where("address", "==", adresse));
    }

    companiesQuery = query(companiesQuery, limit(10));

    const querySnapshot = await getDocs(companiesQuery);
    const companiesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return companiesData;
  } catch (error) {
    console.error("Error filtering companies:", error);
    throw error;
  }
};
