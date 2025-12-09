import Image from 'next/image';
import TextHtml from '../../../app/[lng]/(itinerary)/trips/[slugName]/_components/TextHtml/TextHtml';

const ParseContent = ({ content }: { content: string }) => {
  const regex = /\{\{(.*?)\}\}/g;
  const matches = Array.from(content.matchAll(regex));
  const urls = matches.map((match) => match[1]);
  const newText = content.replace(regex, '');

  return (
    <div>
      <TextHtml description={newText} style={{marginBottom: 16}} />
      {urls &&
        urls?.map(
          (item, i) =>
            item.length > 10 && (
              <Image
                key={i}
                src={item}
                alt='Descripción de la imagen'
                width={384}
                height={156}
                style={{marginBottom: 16}}
              />
            )
        )}
    </div>
  );
};

export default ParseContent;
