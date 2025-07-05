import ContentAdder from './ContentAdder';
import ContentItem from './ContentItem';

const ContentList = ({form , setForm}) => {
    const {content} = form;

    return (
        <div className='w-100 d-flex flex-column align-items-center'>
            <p className='fs-4 my-3'>محتوا:</p>

            <ContentAdder form={form} setForm={setForm} />
        {content.map((item)=> (
            <div className='w-100' key={item.id}>
                <ContentItem id={item.id} type={item.type} contentCurrentValue={item.content} form={form} setForm={setForm} />
            </div>
        ))}
        </div>
    );
};

export default ContentList;
