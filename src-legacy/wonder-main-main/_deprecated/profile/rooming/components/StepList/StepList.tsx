'use client';
import React, { useEffect, useState } from 'react';
import styles from './StepList.module.scss';
import { useTranslation } from '@i18n-client';
import useGetSteps, { Step } from '../utiles/useGetSteps';
import StepByStep from '../StepByStep/StepByStep';
import { useTransition, animated, useSpringRef } from '@react-spring/web';
import { motion } from 'framer-motion';
import { getDataRooming } from '@services/rooming/travellers/getDataRooming';
import { FormSection } from '../DynamicForm/types';

interface VerificationResult {
  name: string;
  verified: boolean;
}

const StepList = ({
  bookingId,
  userId,
  onFinishForm,
  userIsComplete,
}: {
  bookingId: number;
  userId: number;
  onFinishForm: () => void;
  userIsComplete?: boolean;
}) => {
  const [selectedStep, setSelectedStep] = useState<Step>();
  const { t } = useTranslation(undefined, 'rooming');
  const [stepsData, setStepsData] = useState<Step[]>([]);
  const [completedSteps, setCompletedSteps] = useState(0);
  const handleStepClick = (step: Step) => {
    setSelectedStep(step);
  };
  const [direction] = useState('forward');
  const transRef = useSpringRef();

  const transitions = useTransition(selectedStep, {
    from: {
      opacity: 0,
      transform: `translateX(${direction === 'forward' ? 100 : -100}px)`,
    },
    enter: { opacity: 1, transform: 'translateX(0px)', delay: 800 },
    leave: {
      opacity: 0,
      transform: `translateX(${direction === 'forward' ? -100 : 100}px)`,
    },
    config: { easing: (t: number) => 1 - Math.cos((t * Math.PI) / 2) },
  });

  useEffect(() => {
    transRef.start();
    return () => {
      transRef.stop();
    };
  }, [selectedStep]);

  const onNextStep = () => {
    const currentIndex = stepsData.findIndex((step) => step === selectedStep);
    const newStepsData = stepsData.map((step: Step, index) => {
      if (index === currentIndex) step.status = 'complete';
      return step;
    });

    setStepsData(newStepsData);

    const nextIndex = Math.min(currentIndex + 1, stepsData.length - 1);
    setSelectedStep(stepsData[nextIndex]);
  };

  const onPrevStep = () => {
    const currentIndex = stepsData.findIndex((step) => step === selectedStep);
    const prevIndex = Math.max(currentIndex - 1, 0);
    setSelectedStep(stepsData[prevIndex]);
  };

  const fetchVerification = async (
    item: string
  ): Promise<VerificationResult | null> => {
    try {
      const response = await getDataRooming<{ revised: boolean }>({
        bookingId,
        userId,
        section: item as FormSection,
      });

      if (response && typeof response.revised === 'boolean') {
        return {
          name: item,
          verified: response.revised,
        };
      } else {
        console.error(`Invalid response for item ${item}`);
        return null;
      }
    } catch (error) {
      console.error(`Failed to fetch data for item ${item}: ${error}`);
      return null;
    }
  };

  const verifyItems = async (
    itemList: string[]
  ): Promise<VerificationResult[]> => {
    const promises = itemList.map(fetchVerification);
    const results = await Promise.all(promises);

    return results.filter(
      (result): result is VerificationResult => result !== null
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = useGetSteps();
      const items = data.map((item) => item?.id);
      const getRevisedPromise = await verifyItems(items);

      data.forEach((step) => {
        const stepRevised = getRevisedPromise.find((i) => i?.name === step?.id);
        if (stepRevised && stepRevised?.verified) {
          step.status = 'complete';
        }
      });

      setStepsData(data);
      setSelectedStep(data[0]);
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    const totalComplete = stepsData.filter((i) => i?.status === 'complete');

    if (
      stepsData.length > 0 &&
      totalComplete.length === stepsData.length &&
      typeof userIsComplete === 'boolean' &&
      !userIsComplete
    ) {
      onFinishForm();
    }

    setCompletedSteps(totalComplete.length);
  }, [stepsData]);

  return (
    <div className={styles['steps']}>
      <div className={styles['steps__info']}>
        <div className={styles['info__progress']}>
          <p className={styles['progress__title']}>{t('complet_step')}</p>
          <p className={styles['progress__percentage']}>
            {completedSteps}/{stepsData.length}
          </p>
        </div>

        <StepByStep
          steps={stepsData}
          actualStep={selectedStep}
          onClick={handleStepClick}
          className={styles['info__list-steps']}
        />
      </div>

      <div className={styles['steps__forms']}>
        {transitions((style, step) => (
          <animated.div style={style}>
            <motion.h2
              className={styles['forms__title']}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {t(step?.title ?? '')}
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {step?.Content && (
                <step.Content
                  bookingId={bookingId}
                  userId={userId}
                  onNexButton={onNextStep}
                  onPrevButton={onPrevStep}
                />
              )}
            </motion.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default StepList;
