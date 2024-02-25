const getFirestore = () => import("../firebase/firestore");

//BAD METHOD
export const getFirstTenCompanies = async () => {
  try {
    const { db, collection, query, getDocs, limit } = await getFirestore();
    const companiesCollection = collection(db, "books");
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

    let companiesQuery = query(collection(db, "books"));

    if (name) {
      companiesQuery = query(
        companiesQuery,
        where("name", ">=", name),
        where("name", "<=", name + "\uf8ff")
      );
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
