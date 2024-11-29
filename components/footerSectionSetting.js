import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faItalic, faUnderline, faStrikethrough, faListOl, faListUl, faAlignLeft, faAlignCenter, faAlignRight, faLink, faCode, faPaperclip, faSmile, faTrash, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const FooterSectionSetting = () => {
  return (
    <div className='mt-10'>
      <div className='bg-white p-5 shadow-xl rounded-xl'>
        <p className='text-xl font-bold'>Footer Section Setting</p>
        <div className='flex justify-between mt-7'>
          <div className='flex-1'>
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Links</label>
              <input className='p-2 border-gray-500 border w-full rounded-md' placeholder='Enter Here'/>
            </div>
            <div className='mb-4'>
              <label className='font-semibold mb-2 block'>Heading</label>
              <input className='p-2 border-gray-500 border w-full rounded-md' placeholder='Enter Here'/>
            </div>
            <div className='border border-gray-500 rounded-lg flex justify-center items-center space-x-4 p-1 mt-6'>
              <span className='text-lg bg-blue-400 p-1 rounded-full text-white'>+</span>
              <p className='text-lg'>Add Custom Fields</p>
            </div>
          </div>
          {/* div2 */}
          <div className='flex-1 ml-10'>
            <div className='bg-white rounded-lg shadow-2xl'>
            <div className='flex flex-wrap space-x-2p-2'>
              <button className='p-2'>
                <FontAwesomeIcon icon={faBold} />
              </button>
              <button className='p-2'>
                <FontAwesomeIcon icon={faItalic} />
              </button>
              <button className='p-2'>
                <FontAwesomeIcon icon={faUnderline} />
              </button>
              <button className='p-2'>
                <FontAwesomeIcon icon={faStrikethrough} />
              </button>
              <button className='p-2'>
                <FontAwesomeIcon icon={faListOl} />
              </button>
              <button className='p-2'>
                <FontAwesomeIcon icon={faListUl} />
              </button>
              <button className='p-2'>
                <FontAwesomeIcon icon={faAlignLeft} />
              </button>
              <button className='p-2'>
                <FontAwesomeIcon icon={faAlignCenter} />
              </button>
              <button className='p-2'>
                <FontAwesomeIcon icon={faAlignRight} />
              </button>
              <button className='p-2'>
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className='p-2'>
                <FontAwesomeIcon icon={faCode} />
              </button>
            </div>
            <textarea
              className='w-full h-16 p-2 resize-none'
              placeholder='Type your message.'
            ></textarea>
            <div className='flex justify-between items-center mt-4'>
              <div className='space-x-2'>
                <button className='p-2 '>
                  <FontAwesomeIcon icon={faPaperclip} />
                </button>
                <button className='p-2 '>
                  <FontAwesomeIcon icon={faSmile} />
                </button>
              </div>
              <div className='space-x-2'>
                <button className='p-2 '>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className='p-2'>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>
          {/* buttons */}
          <button className='bg-blue-400 w-full rounded-md py-2 mt-6 text-white'>Save</button>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSectionSetting
