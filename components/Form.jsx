import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Product</span>
      </h1> 
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-zinc-300'>
            Product Name
          </span>

          <input 
            type="text"
            value={post.pname}
            onChange={(e) => setPost({ ...post, pname: e.target.value })}
            placeholder='Write your product name'
            required
            className='w-full  rounded-xl p-2 bg-zinc-700 text-zinc-200 '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-zinc-300'>
            Price
          </span>
          <input
            value={post.price}
            onChange={(e) => setPost({ ...post, price: e.target.value })}
            type='text'
            placeholder='Price'
            required
            className='w-full  rounded-xl p-2 bg-zinc-700 text-zinc-200'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-zinc-300'>
            Description
          </span>
          <input
            value={post.desc}
            onChange={(e) => setPost({ ...post, desc: e.target.value })}
            type='text'
            placeholder='Description'
            required
            className='w-full  rounded-xl p-2 bg-zinc-700 text-zinc-200'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;