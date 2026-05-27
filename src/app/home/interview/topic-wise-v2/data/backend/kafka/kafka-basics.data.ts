import { DocSection }
from '../../../models/doc.model';

export const KAFKA_BASICS_SECTION:
DocSection = {

  id: 'kafka-basics',

  title: 'Kafka Basics',

  summary:
    'Topics, partitions, brokers, producers, consumers, and Kafka architecture.',

  articles: [

    {
      id: 'kafka-topic',

      title: 'What is Kafka Topic?',

      level: 'beginner',

      tags: [
        'kafka',
        'topic',
      ],

      content: `
# Kafka Topic

Topic is a logical channel where events/messages are stored.

Producers publish messages to topic.

Consumers read messages from topic.

Example:
- order-created
- payment-success
- user-notification
      `,
    },

    {
      id: 'partition',

      title: 'Partitions in Kafka',

      level: 'intermediate',

      tags: [
        'kafka',
        'partition',
      ],

      content: `
# Partitions in Kafka

Kafka topics are divided into partitions.

Partitions provide:
- scalability
- parallelism
- ordering within partition

Each partition maintains ordered sequence of messages.
      `,
    },

  ],
};