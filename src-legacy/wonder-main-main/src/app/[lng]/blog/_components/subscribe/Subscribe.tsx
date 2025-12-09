'use client';
import './Subscribe.scss';
import { useTranslation } from '@i18n-client';

enum Elanguage {
  EN = 'en',
  ES = 'es',
}

const Subscribe =  ({ lng }: { lng: string }) => {
  const { t } =  useTranslation(lng, 'blog');
  const tag = lng === Elanguage.EN ? '12769574' : '12769570';

  return (
    <div>
      <div id='mc_embed_shell'>
        <div id='mc_embed_signup'>
          <form
            action='https://wondertravel.us9.list-manage.com/subscribe/post?u=55caf59e198794280b966e028&id=5708394b5f&f_id=003926e1f0'
            method='post'
            id='mc-embedded-subscribe-form'
            name='mc-embedded-subscribe-form'
            className='validate'
            target='_blank'
          >
            <div id='mc_embed_signup_scroll'>
              <h2>{t('Subscribe')}</h2>
              <p>{t('subscribe_subtitle')}</p>
              <div className='indicates-required'>
                <span className='asterisk'>*</span> {t('indicates_required')}
              </div>
              <div hidden>
                <input type='hidden' name='tags' value={tag} />
              </div>
              <div className='mc-field-group'>
                <label htmlFor='mce-EMAIL'>
                  {t('Email_address')} <span className='asterisk'>*</span>
                </label>
                <input
                  type='email'
                  name='EMAIL'
                  className='required email'
                  id='mce-EMAIL'
                  required
                  defaultValue=''
                />
                <span id='mce-EMAIL-HELPERTEXT' className='helper_text' />
                <p id='mc_our_politics'>
                  {t(
                    'By signing up you accept our data treatment policy, available in the following'
                  )}
                  <a
                    href='https://bit.ly/47JMEhF'
                    target='_blank'
                    rel='noreferrer'
                    
                  >
                    {' '}
                    link
                  </a>
                </p>
              </div>
              <div id='mce-responses' className='clear'>
                <div
                  className='response'
                  id='mce-error-response'
                  style={{ display: 'none' }}
                />
                <div
                  className='response'
                  id='mce-success-response'
                  style={{ display: 'none' }}
                />
              </div>
              <div
                aria-hidden='true'
                style={{ position: 'absolute', left: '-5000px' }}
              >
                <input
                  type='text'
                  name='b_55caf59e198794280b966e028_5708394b5f'
                  tabIndex={-1}
                  defaultValue=''
                />
              </div>
              <div className='clear'>
                <input
                  type='submit'
                  name='subscribe'
                  id='mc-embedded-subscribe'
                  className='button'
                  defaultValue={t('Subscribe_cta')}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
