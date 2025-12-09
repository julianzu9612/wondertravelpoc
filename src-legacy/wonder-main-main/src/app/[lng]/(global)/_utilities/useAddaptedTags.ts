import { IWonderLineCategory } from '@components/CategoryFilter/CategoryFilter.model';
import { ItemContent } from '@components/DropdownCheck/DropdownCheck.model';
import { GetTags } from '@services/trips/tags/getTags';
import { getArrayItemRandom } from '@utils/index';

export const useAddaptedTags = async (
  lng: string,
  category?: { quantityCategory?: number }
) => {
  const tagsServices = await GetTags(lng);
  const addaptedTags: IWonderLineCategory[] = [];
  const tagsFilter: ItemContent[] = [];
  for (const { image_url, label, name } of tagsServices) {
    addaptedTags.push({
      name,
      label,
      image: image_url,
      url: `/categories/${name}`,
    });
    tagsFilter.push({
      name,
      label,
    });
  }
  const tagsRandom: IWonderLineCategory[] = [];
  const cantity = Math.min(
    category?.quantityCategory || 4,
    tagsServices.length
  );

  while (tagsRandom.length < cantity) {
    const categoryRamdom = getArrayItemRandom(
      addaptedTags
    ) as IWonderLineCategory;
    const findCategory = tagsRandom.some((category) => {
      return category.name === categoryRamdom.name;
    });

    if (!findCategory) {
      tagsRandom.push(categoryRamdom);
    }
  }
  return {
    TagsAddaptToListCheck: addaptedTags,
    randomTags: tagsRandom,
    tagsServices,
    tagsFilter,
  };
};
