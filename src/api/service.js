import supabase from "./index";

export const getAllItems = async () => {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .order("name", { ascending: true });
  if (error) throw Error(error.message);
  return data;
};

export const getAllTagsName = async () => {
  const { data, error } = await supabase.from("tags").select("name");
  if (data) return data;
  if (error) throw Error(error);
};

export const getItemsByTag = async (tagName) => {
  const { data: tagData, error: tagError } = await supabase
    .from("tags")
    .select("id")
    .eq("name", tagName);

  if (tagError) throw Error(tagError.message);
  if (tagData.length === 0) return [];

  const { data: relationData, error: relationError } = await supabase
    .from("tags-items")
    .select("*")
    .eq("id_tag", tagData[0].id);

  if (relationError) throw Error(relationError.message);
  if (relationData.length === 0) return [];

  const { data: itemsData, error: itemsError } = await supabase
    .from("items")
    .select("*")
    .in(
      "id",
      relationData.map((relation) => relation.id_item)
    );

  if (itemsError) throw Error(itemsError.message);

  return itemsData;
};
